import React, { useMemo, useState, useEffect } from "react";
import AppLayout from "@components/Layouts/AppLayout";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import {
	AddButton,
	DeleteButton,
	EditButton,
	DownloadButton,
	NexPageCursor,
	PrintButton,
	RefreshButton,
} from "@molecules/ContentButtons";
import { Button } from "@atoms/FormControl";
const App = () => {
	const [dataURI, setdataURI] = useState("");
	const [canCapture, setCanCapture] = useState(true);
	function handleTakePhoto(dataUri) {
		// Do stuff with the photo...
		setdataURI(dataUri);
		console.log("takePhoto");
	}
	useEffect(() => {
		if (dataURI) {
			setCanCapture(false);
		} else {
			setCanCapture(true);
		}
	}, [dataURI]);
	return (
		<AppLayout title="Absen">
			<div className="py-2">
				<div className="card-content">
					<div className="flex shrink-0 p-4 items-center gap-2 max-w-full justify-end">
						{!canCapture && (
							<RefreshButton
								onClick={() => setdataURI("")}
								title="Buka Kamera"
							/>
						)}
						<AddButton />
						{/* <DownloadButton onClick={() => alert("to do list...")} /> */}
						{/* <PrintButton onClick={() => alert("to do list...")} /> */}
					</div>
					<div>
						Absen
						<div className="sm:w-1/4">
							{dataURI ? (
								<div>
									<img className="mb-2" src={dataURI} alt="" />
									<div className="flex space-x-2 justify-center">
										<Button>Absen </Button>
										<Button color="red" onClick={() => setdataURI("")}>
											Kamera{" "}
										</Button>
									</div>
								</div>
							) : (
								<Camera
									idealFacingMode={FACING_MODES.ENVIRONMENT}
									idealResolution={{ height: 640, width: 480 }}
									onTakePhoto={dataUri => {
										handleTakePhoto(dataUri);
									}}
									isFullscreen={false}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</AppLayout>
	);
};

export default App;
