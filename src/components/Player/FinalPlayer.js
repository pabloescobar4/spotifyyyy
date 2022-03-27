import React from 'react'
import SpPlayer from '../ShanPlayer'
function FinalPlayer(){

	const accessToken =
"BQBUoRUFI_DGH4w0NBDDPoLaZ8TA5DPnQl09Q-SX_l_oX8jAgNZJNOum5G7lPnwN2YUTyzfmzAeq2byO4_5qswZ2SRTf2uIXUH1dBooyjaaT-tUWA0kah6PEnGV8sKRGFF1Ivk-PBMuzom2lQMrXjJuR95tyzHZKosAs-BfRToDKpZhLBkSM45ZK0lZ9SCc43hgWQ92DX39CNRGA8DiJoQ";

	return(
		<div className="relative">
		<div className=" flex bg-zinc-800 w-full h-24 fixed bottom-0 left-0 right-0">
		 
		<div className=" left-0 bottom-0 w-screen  fixed">
			{/* newgsdfgvvbdfzvvdavadfv dfv  zxvvd dsfvca */}
			<SpPlayer accessToken={accessToken}  />
			</div>
		  </div>
		  </div>
	)
}

export default FinalPlayer