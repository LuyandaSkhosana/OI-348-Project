/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ps0qqv8fwbv7uc9",
    "created": "2024-11-04 18:31:02.475Z",
    "updated": "2024-11-04 18:31:02.475Z",
    "name": "student",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ozkmmcl6",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "tom6hdle",
        "name": "surname",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "8garypiw",
        "name": "application_type",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "undergraduate",
            "postgraduate"
          ]
        }
      },
      {
        "system": false,
        "id": "ldqbrava",
        "name": "course",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "BA",
            "BsC",
            "BInf",
            "LLB"
          ]
        }
      },
      {
        "system": false,
        "id": "zkz4uebd",
        "name": "modules",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 6,
          "values": [
            "sociology",
            "psychology",
            "english",
            "physiology",
            "informatics",
            "constitutional law"
          ]
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ps0qqv8fwbv7uc9");

  return dao.deleteCollection(collection);
})
