importScripts("./hanzi_lookup.js");

let ready=false;
onmessage=async event=>{
  const data=event.data||{};
  if(data.type==="init"){
    let lastError=null;
    for(const url of (data.wasmUrls||[])){
      try{
        await wasm_bindgen(url);
        ready=true;
        postMessage({type:"ready"});
        return;
      }catch(error){lastError=error;}
    }
    postMessage({type:"init-error",message:String(lastError||"WASM model could not be loaded")});
    return;
  }
  if(data.type==="recognize"){
    if(!ready){postMessage({type:"error",id:data.id,message:"Recognizer is not ready"});return;}
    try{
      const matches=JSON.parse(wasm_bindgen.lookup(data.strokes||[],data.limit||5));
      postMessage({type:"result",id:data.id,matches:(matches||[]).map(match=>({hanzi:String(match.hanzi||"")}))});
    }catch(error){
      postMessage({type:"error",id:data.id,message:String(error||"Recognition failed")});
    }
  }
};
