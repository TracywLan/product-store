import dotenv from 'dotenv';
dotenv.config();

console.log('All environment variables:');
console.log(process.env);
console.log('\n🔍 MONGO_URI specifically:', process.env.MONGO_URI);