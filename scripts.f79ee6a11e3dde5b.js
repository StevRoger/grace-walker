const defaultTheme=require("tailwindcss/defaultTheme");require("dotenv").config();const enablePurge=process.env.ENABLE_PURGE||!1;module.exports={important:!0,plugins:[],purge:{enabled:enablePurge,content:["./src/**/*.html","./src/**/*.scss"]},content:["./src/**/*.{html,ts}"],theme:{extend:{fontFamily:{sans:["Proxima Nova",...defaultTheme.fontFamily.sans]}}}};