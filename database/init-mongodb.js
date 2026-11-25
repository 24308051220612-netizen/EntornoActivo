// Ejecutar localmente desde mongosh. Crea solo estructura e índices; no inserta datos.
const appDb = db.getSiblingDB("entornoactivo");

const definitions = {
  users: {
    bsonType: "object",
    required: ["name", "email", "userType", "createdAt"],
    properties: {
      name: { bsonType: "string", minLength: 1, maxLength: 100 },
      email: { bsonType: "string", minLength: 3, maxLength: 254 },
      userType: { enum: ["student", "school_staff", "neighbor"] },
      description: { bsonType: "string", maxLength: 500 },
      profilePhotoUrl: { bsonType: "string", maxLength: 2048 },
      organizerStatus: { enum: ["none", "pending", "approved", "rejected"] },
      accountStatus: { enum: ["pending", "active", "suspended"] },
      passwordHash: { bsonType: "string" },
      createdAt: { bsonType: "date" },
      updatedAt: { bsonType: "date" },
    },
  },
  communities: {
    bsonType: "object",
    required: ["name", "type", "createdAt"],
    properties: {
      name: { bsonType: "string", minLength: 1, maxLength: 120 },
      type: { enum: ["school", "neighborhood"] },
      city: { bsonType: "string", maxLength: 100 },
      state: { bsonType: "string", maxLength: 100 },
      active: { bsonType: "bool" },
      createdAt: { bsonType: "date" },
    },
  },
  activities: {
    bsonType: "object",
    required: ["communityId", "title", "category", "startsAt", "capacity", "organizerId", "status", "createdAt"],
    properties: {
      communityId: { bsonType: "objectId" },
      title: { bsonType: "string", minLength: 1, maxLength: 140 },
      description: { bsonType: "string", maxLength: 3000 },
      category: { enum: ["academic", "sports", "cultural", "environmental", "community", "other"] },
      startsAt: { bsonType: "date" },
      generalLocation: { bsonType: "string", maxLength: 240 },
      capacity: { bsonType: "int", minimum: 1, maximum: 10000 },
      organizerId: { bsonType: "objectId" },
      status: { enum: ["draft", "pending_approval", "published", "rejected", "canceled", "finished"] },
      createdAt: { bsonType: "date" },
      updatedAt: { bsonType: "date" },
    },
  },
  enrollments: {
    bsonType: "object",
    required: ["activityId", "userId", "status", "enrolledAt"],
    properties: {
      activityId: { bsonType: "objectId" },
      userId: { bsonType: "objectId" },
      status: { enum: ["active", "canceled"] },
      enrolledAt: { bsonType: "date" },
      canceledAt: { bsonType: "date" },
    },
  },
  reports: {
    bsonType: "object",
    required: ["reason", "status", "createdAt"],
    properties: {
      activityId: { bsonType: "objectId" },
      reporterId: { bsonType: "objectId" },
      reason: { enum: ["inaccurate_activity", "safety_concern", "inappropriate_content", "other"] },
      details: { bsonType: "string", maxLength: 1500 },
      status: { enum: ["open", "reviewing", "resolved", "dismissed"] },
      reviewedBy: { bsonType: "objectId" },
      createdAt: { bsonType: "date" },
      resolvedAt: { bsonType: "date" },
    },
  },
};

for (const [collectionName, schema] of Object.entries(definitions)) {
  const exists = appDb.getCollectionNames().includes(collectionName);
  if (exists) {
    appDb.runCommand({
      collMod: collectionName,
      validator: { $jsonSchema: schema },
      validationLevel: "strict",
      validationAction: "error",
    });
  } else {
    appDb.createCollection(collectionName, {
      validator: { $jsonSchema: schema },
      validationLevel: "strict",
      validationAction: "error",
    });
  }
}

appDb.users.createIndex({ email: 1 }, { unique: true, name: "unique_user_email" });
appDb.communities.createIndex({ name: 1, type: 1 }, { unique: true, name: "unique_community_name_type" });
appDb.activities.createIndex({ communityId: 1, status: 1, startsAt: 1 }, { name: "activities_by_community_status_date" });
appDb.activities.createIndex({ organizerId: 1, createdAt: -1 }, { name: "activities_by_organizer" });
appDb.enrollments.createIndex(
  { userId: 1, activityId: 1 },
  { unique: true, partialFilterExpression: { status: "active" }, name: "one_active_enrollment_per_user_activity" },
);
appDb.enrollments.createIndex({ activityId: 1, status: 1 }, { name: "enrollments_by_activity_status" });
appDb.reports.createIndex({ status: 1, createdAt: -1 }, { name: "reports_queue" });

print(`Colecciones e índices preparados en ${appDb.getName()}. No se insertaron datos.`);
