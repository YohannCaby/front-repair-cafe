
export function getSaisonAdhesion(){
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve({debut:new Date(2022,8,31),fin:new Date(2023,9,1)})},300);
    })
}