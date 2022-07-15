import{r as f,o,c as u,a as s,b as m,i as a,u as c,d as i,e as d,F as g,k as b,l as v,g as x}from"./index.7ebba777.js";import{_ as r}from"./Typing.4c11faa2.js";const h={class:"group flex flex-col justify-center lg:flex-row"},j={class:"flex h-full w-full items-center justify-center overflow-hidden rounded-md shadow lg:shadow-lg"},k=["src"],_={class:"h-full w-full p-4 pb-2"},w={class:"mt-4 flex flex-col justify-center"},y=["href"],$={props:{project:{type:Object,default:()=>({name:"Project",description:"description.",image:""})}},setup(l){let e=f(0);return(p,t)=>(o(),u("div",h,[s("div",j,[s("img",{src:l.project.image,class:"w-full transition-all duration-200 ease-in group-hover:scale-105"},null,8,k)]),s("div",_,[m(r,{class:"mb-2 block text-lg md:text-xl lg:mb-4 lg:text-2xl",text:l.project.name,speed:60,onDone:t[0]||(t[0]=n=>a(e)?e.value++:e++)},null,8,["text"]),c(e)>0?(o(),i(r,{key:0,class:"mb-2 block text-sm text-slate-800 md:text-base",text:l.project.description,speed:40,onDone:t[1]||(t[1]=n=>a(e)?e.value++:e++)},null,8,["text"])):d("",!0),c(e)>1?(o(),i(r,{key:1,class:"block text-sm text-lime-900 md:text-base",text:l.project.skills.join(", "),speed:40,onDone:t[2]||(t[2]=n=>a(e)?e.value++:e++)},null,8,["text"])):d("",!0),s("div",w,[s("a",{href:l.project.url,target:"_blank",rel:"noopener noreferrer",class:"inline-block"},[c(e)>2?(o(),i(r,{key:0,class:"w-full text-indigo-900 transition-all duration-200 ease-in hover:text-red-600",text:l.project.url,speed:40,onDone:t[3]||(t[3]=n=>a(e)?e.value++:e++)},null,8,["text"])):d("",!0)],8,y)])])]))}},B={class:"h-full w-full px-8 pt-16 sm:px-12 sm:pt-20 lg:px-16 lg:pt-24"},D={class:"py-2"},N=s("div",{class:"opacity-100"},[x(" \u5F85\u7DE8\u8F2F"),s("br"),x(" \u6B61\u8FCE\u95DC\u6CE8\u6211\u6210\u9577 ")],-1),C={setup(l){return(e,p)=>(o(),u("div",B,[m(r,{text:"YunHsien's \u6B77\u7A0B",class:"block text-4xl sm:text-3xl lg:text-4xl"}),s("div",D,[(o(!0),u(g,null,b(c(v),(t,n)=>(o(),i($,{key:n,project:t,class:"my-2 w-full rounded-md bg-amber-600 bg-opacity-50 p-4 shadow-md shadow-white"},null,8,["project"]))),128))]),N]))}};export{C as default};