import React from 'react'
import ReactDOM from 'react-dom'

import podcastDetails from '../js/handlePodcast'


import { useState ,useEffect } from 'react'

import Head from 'next/head';
import PodcastContext from '../contexts/PodcastContext'
import TopBar from '../components/TopBar'
import Painel from '../components/Painel';
import PlaylistPodcast from '../components/PlaylistPodcast';

import styles from '../css/contexts/PodcastContext.module.css'

const index = (props)=> {

   
  
    return (
                <PodcastContext >  
                    <div className={styles.contentMain}>
                        <Painel/> 
                        <PlaylistPodcast/>
                    </div>
                    <TopBar/>
                </PodcastContext> 
                         

    )
}

export default index