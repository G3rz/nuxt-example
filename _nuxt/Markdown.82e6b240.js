import s from"./ContentSlot.999850db.js";import{b as o,k as m,h as p,e as u}from"./entry.d826918f.js";import"./utils.123918a2.js";import"./app.config.e24547d1.js";const d=o({name:"Markdown",extends:s,setup(t){const{parent:e}=m(),{between:n,default:r}=p(),a=u(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:r,tags:a,between:n,parent:e}}});export{d as default};