import React from 'react'
import SpPlayer from '../ShanPlayer'
function FinalPlayer(){

	const accessToken =
"BQCFyrcbPNExcxHuFfrJEgplVcHzJC-mgrj5E0E4kdodHEQW2YqN2hGCuudeH-x6kF24jz5QEqzQwwTYo4LwuheSOiPPBgM6RP9xpWDQJ2IbpX74jbaN-LzBri-ytfcTpMkfcX4UtXlM7Ndc48NesFYw3vH1IQBZOEgbOCG-_Ps5_vWyJCCkp14YkfIUNkVYkbeZpxf8s-wT8Q0kvx9y0w";

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