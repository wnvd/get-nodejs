const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function main() {
    try {
        const db = client.db('recipe_db');
        const contacts = db.collection('contacts');

        const query = {_id : new ObjectId("647d999aa4e9a7069ff97efc") };

        const options = {
        };

        const result = await contacts.findOne(query);

        console.log(result);
    } finally {
        await client.close()
    }
}

main()
    .then(console.log)
    .catch(console.dir)
