"use strict";(()=>{var e={};e.id=791,e.ids=[791],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},2206:(e,t,a)=>{a.r(t),a.d(t,{config:()=>g,default:()=>h,routeModule:()=>_});var s={};a.r(s),a.d(s,{default:()=>m});var o=a(1802),n=a(7153),r=a(6249),i=a(1879);let cleanSourceText=e=>e.trim().replace(/(\n){4,}/g,"\n\n\n").replace(/\n\n/g," ").replace(/ {3,}/g,"  ").replace(/\t/g,"").replace(/\n+(\s*\n)*/g,"\n"),l=require("@mozilla/readability"),c=require("endent");var p=a.n(c);let u=require("jsdom");var d=a.n(u);let handler=async(e,t)=>{try{let{messages:a,key:s,model:o,googleAPIKey:n,googleCSEId:r}=e.body,c=a[a.length-1],m=encodeURIComponent(c.content.trim()),h=await fetch(`https://customsearch.googleapis.com/customsearch/v1?key=${n||process.env.GOOGLE_API_KEY}&cx=${r||process.env.GOOGLE_CSE_ID}&q=${m}&num=5`),g=await h.json(),_=g.items.map(e=>({title:e.title,link:e.link,displayLink:e.displayLink,snippet:e.snippet,image:e.pagemap?.cse_image?.[0]?.src,text:""})),w=await Promise.all(_.map(async e=>{try{let t=new Promise((e,t)=>setTimeout(()=>t(Error("Request timed out")),5e3)),a=await Promise.race([fetch(e.link),t]),s=await a.text(),o=new(d()).VirtualConsole;o.on("error",e=>{e.message.includes("Could not parse CSS stylesheet")||console.error(e)});let n=new u.JSDOM(s,{virtualConsole:o}),r=n.window.document,i=new l.Readability(r).parse();if(i){let t=cleanSourceText(i.textContent);return{...e,text:t.slice(0,2e3)}}return null}catch(e){return console.error(e),null}})),I=w.filter(Boolean),E=p()`
    Provide me with the information I requested. Use the sources to provide an accurate response. Respond in markdown format. Cite the sources you used as a markdown link as you use them at the end of each sentence by number of the source (ex: [[1]](link.com)). Provide an accurate response and then stop. Today's date is ${new Date().toLocaleDateString()}.

    Example Input:
    What's the weather in Malaysia today?

    Example Sources:
    [Weather in Malaysia](https://www.google.com/search?q=weather+malaysia)

    Example Response:
    It's 30 degrees and partly cloudy in Malaysia today. [[1]](https://www.google.com/search?q=weather+malaysia)

    Input:
    ${c.content.trim()}

    Sources:
    ${I.map(e=>p()`
      ${e.title} (${e.link}):
      ${e.text}
      `)}

    Response:
    `,y=await fetch(`${i.bg}/v1/chat/completions`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${s||process.env.OPENAI_API_KEY}`,...process.env.OPENAI_ORGANIZATION&&{"OpenAI-Organization":process.env.OPENAI_ORGANIZATION}},method:"POST",body:JSON.stringify({model:o.id,messages:[{role:"system",content:"Use the sources to provide an accurate response. Respond in markdown format. Cite the sources you used as [1](link), etc, as you use them. Maximum 4 sentences."},{role:"user",content:E}],max_tokens:1e3,temperature:1,stream:!1})}),{choices:A}=await y.json(),P=A[0].message.content;t.status(200).json({answer:P})}catch(e){console.error(e),t.status(500).json({error:"Error"})}},m=handler,h=(0,r.l)(s,"default"),g=(0,r.l)(s,"config"),_=new o.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/google",pathname:"/api/google",bundlePath:"",filename:""},userland:s})},1879:(e,t,a)=>{a.d(t,{Ar:()=>n,bg:()=>o,cl:()=>s});let s=process.env.NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT||"Rulz-AI is a powerful AI language model that can assist with various tasks and provide intelligent responses. Respond using markdown and emoji.",o=process.env.OPENAI_API_HOST||"https://api.openai.com",n=parseFloat(process.env.NEXT_PUBLIC_DEFAULT_TEMPERATURE||"0.5");process.env.OPENAI_API_TYPE,process.env.OPENAI_API_VERSION,process.env.OPENAI_ORGANIZATION,process.env.AZURE_DEPLOYMENT_ID}};var t=require("../../webpack-api-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),a=t.X(0,[222],()=>__webpack_exec__(2206));module.exports=a})();