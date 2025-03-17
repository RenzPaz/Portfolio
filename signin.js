
const fetchData = async () => {

    try{
        const result = await fetch('http://10.120.20.241:3000/about');
        console.log(await result.json())
    }catch(error){
        console.log(error)
    }

}

fetchData()