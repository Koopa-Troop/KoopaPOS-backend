async function seed(){
    await require('./seedApiKeys')();
    await require('./seedProducts')();
    await require('./seedUsers')();
    return process.exit(0);
}

seed();
