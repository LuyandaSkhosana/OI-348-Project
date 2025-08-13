/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ps0qqv8fwbv7uc9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sbvlveqg",
    "name": "email",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ps0qqv8fwbv7uc9")

  // remove
  collection.schema.removeField("sbvlveqg")

  return dao.saveCollection(collection)
})
