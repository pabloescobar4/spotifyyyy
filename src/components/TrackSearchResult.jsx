import React from "react";

export const TrackSearchResult = ({ track, chooseTrack }) => {
    
    const handleplay = () => {
        chooseTrack(track);
    }
    return (
        <div className="flex m-2 align-items-center" style={{cursor:"pointer"}} onClick={handleplay}>
            <img src={track.album} alt="" style={{ height: "64px", width: "64px" }} />
            <div className="ml-3">
                <div>{track.title}</div>
                <div className="text-muted">{track.artist}</div>
            </div>
        </div>
    )
    
}
