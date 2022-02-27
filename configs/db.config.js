module.exports= {
    HOST :"localhost",
    USER: "root",
    PASSWORD :"12345",
    DB: "store_book",
    dialect :"mysql",
    pool :{
        max :5 , // maximum connection at any time =5 at peak load
        min:0,//minimum connection 
        acquire: 30000,//whenever a client try to acquire a connection 30kms menas 3s before aport a connection//max wait time 30s
        idle :1000,// means connection thread will be realse when within 1000s connection has not established 

    }





}