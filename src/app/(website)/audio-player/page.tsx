'use client'
import { NextPage } from 'next'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './style.css'
const Index: NextPage = () => {
    return <section dir='ltr' className='my-[20px] w-[350px] max-w-full m-auto'>
        <AudioPlayer
            src="/audio/music.mp3"
            onPlay={() => console.log('Playing')}
            showJumpControls={true}
        />
    </section>
}
export default Index