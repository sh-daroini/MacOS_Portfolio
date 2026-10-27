import React from 'react'
import { WindowControls } from '../components'
import WindowWrapper from '../hoc/WindowWrapper'

const Photos = () => {
	return (
		<>
			<div id='window-header'>
				<WindowControls target="photos"/>
        <h2>Photos</h2>
			</div>

			<div className='bg-amber-300 flex h-[30rem]  space-y-5 w-[60rem]'>
				<h1 className='bg-amber-50'>anif</h1>
			</div>
		</>
	)
}

const PhotosWrapper = WindowWrapper(Photos, 'photos')

export default PhotosWrapper