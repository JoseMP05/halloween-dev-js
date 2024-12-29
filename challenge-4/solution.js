export function findTheKiller (whisper, suspects){
  let finalSuspects = []

  for (const suspect of suspects){
    let same = true
    for (let i = 0; i < whisper.length; i++){
      if (whisper[i] === '~')
        continue
      if(whisper[i] === '$'){
        if (suspect[i])
          same = false
        break
      }
      if(whisper[i] !== suspect[i]?.toLowerCase()){
        same = false
        break
      }
    }
    
    if (same){
      finalSuspects.push(suspect)
    }
  }
  
  return finalSuspects.join(",")
}