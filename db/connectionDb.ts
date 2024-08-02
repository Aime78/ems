import mongoose from 'mongoose';

const connection: { isConnected?: number } = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  // @ts-ignore comment
  const db = await mongoose.connect(process.env.MONGODB_URI as string, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    dbName: 'ems',
  });

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
