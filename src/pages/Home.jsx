import React ,{useState,useEffect} from 'react'
import {useStateContext} from '../context'
import {DisplayCampaigns} from '../components'


const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [campaign, setCampaign] = useState([])
  const {address,contract,getCampaigns} = useStateContext();

  const fetchCampaigns = async() => {
    setIsLoading(true);
    const data =await getCampaigns();
    
    setCampaign(data);
    setIsLoading(false);
  }
  useEffect(() => {
    if(contract) 
      fetchCampaigns();
    // console.log(campaign);
  }, [address,contract])
  
  return (
    <div> 
      {/* {console.log(campaign)} */}
    <DisplayCampaigns
    title="All Campaigns"
    isLoading={isLoading}
    campaigns={campaign}
    />
    </div>

  )
}

export default Home