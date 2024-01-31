import React from 'react'
import cashapp from'../../icons/icons1/cashapp.png'
import cell from '../../icons/icons1/cell.png'
import contacts from '../../icons/icons1/contacts.png'
import email from '../../icons/icons1/email.png'
import etsy from '../../icons/icons1/etsy.png'
import facebook from '../../icons/icons1/facebook.png'
import instagram from '../../icons/icons1/instagram.png'
import link from '../../icons/icons1/link.png'
import linkedin from '../../icons/icons1/linkedin.png'
import location from '../../icons/icons1/location.png'
import paypal from '../../icons/icons1/paypal.png'
import pinterest from '../../icons/icons1/pinterest.png'
import snapchat from '../../icons/icons1/snapchat.png'
import spotify from '../../icons/icons1/spotify.png'
import text from '../../icons/icons1/text.png'
import tiktok from '../../icons/icons1/tiktok.png'
import whatsapp from '../../icons/icons1/whatsapp.png'
import youtube from '../../icons/icons1/youtube.png'
import twitter from '../../icons/icons1/x.png'


export const contactIcons=[
    {
        id: 1,
        name:'Cell',
        title:'Cell',
        img:cell,
        placeholder:'Phone Number*'
    },
    {
        id: 2,
        name:'Text',
        title:'Text',
        img:text,
        placeholder:'Phone Number*'
    },
    {
        id: 3,
        name:'Whatsapp',
        title:'Whatsapp',
        img:whatsapp,
        placeholder:'Phone Number*'
    },
    { 
        id: 4,
        name:'Email',
        title:'Email',
        img:email,
        placeholder:'Email*'
    },
    {
        id: 5,
        name:'Contacts',
        title:'Contact',
        img:contacts,
        placeholder:'contacts'
    }
    ]
    export const socialIcons=[
        {
            id: 6,
            name:'Instagram',
            title:'Instagram',
            img:instagram,
            placeholder:'Instagram Username*'
        },
        {
            id: 7,
            name:'Facebook',
            title:'Facebook',
            img:facebook,
            placeholder:'Facebook Profile Link*'
        },
        {
            id: 8,
            name:'Tiktok',
            title:'Tiktok',
            img:tiktok,
            placeholder:'Tiktok Username*'
        },
        {
            id: 9,
            name:'Linkedin',
            title:'Linkedin',
            img:linkedin,
            placeholder:'Linkedin Profile Link*'
        },
        {
            id: 10,
            name:'Pinterest',
            title:'Pinterest',
            img:pinterest,
            placeholder:'Pinterest Username*'
        },
        {
            id: 11,
            name:'Youtube',
            title:'Youtube',
            img:youtube,
            placeholder:'Youtube Chanel Url*'
        },
        {
            id: 12,
            name:'Snapchat',
            title:'Snapchat',
            img:snapchat,
            placeholder:'Snapchat Username*'
        },
      
       
        {
            id: 13,
            name:'Location',
            title:'Location',
            img:location,
            placeholder:'location'
        },
        {
            id: 14,
            name:'Twitter',
            title:'Twitter',
            img:twitter,
            placeholder:'twitter'
        },
        ]
    export const media=[
            {
                id: 15,
                name:'Spotify',
               title :'Spotify',
                img:spotify,
                placeholder:'Spotify link*'
            },
            {
                id: 16,
                name:'etsy',
                title:'etsy',
                img:etsy,
                placeholder:'etsy'
            },
            ]
    export const payment=[
                {
                    id: 17,
                    name:'Cash App',
                    title:'CashApp',
                    img:cashapp,
                    placeholder:'Cash App username*'
                },
                {
                    id: 18,
                    name:'PayPal',
                    title:'PayPal',
                    img:paypal,
                    placeholder:'paypal.me link*'
                },
                ]
                export const more=[
                    {
                        id: 19,
                        name:'Link',
                        title:'Link',
                        img:link,
                        placeholder:'link*'
                    },
                    ]
 export let returnIcons=(id)=>{
                            if (id===1) {
                                return cell
                            }
                            else if (id===2) {
                                return text
                            }
                            else if (id===3) {
                                return whatsapp
                            }
                            else if (id===4) {
                                return email
                            }
                            else if (id===5) {
                                return contacts
                            }
                            else if (id===6) {
                                return instagram
                            }
                            else if (id===7) {
                                return facebook
                            }
                            else if (id===8) {
                                return tiktok
                            }
                            else if (id===9) {
                                return linkedin
                            }
                            else if (id===10) {
                                return pinterest
                            }
                            else if(id===11) {
                                return youtube
                            }
                            else if (id===12) {
                                return snapchat
                            }
                            else if (id===13) {
                                return location
                            }
                            else if (id===14) {
                                return twitter
                            }
                            else if (id===15) {
                                return spotify
                            }
                            else if (id===16) {
                                return etsy
                            }
                            else if (id===17) {
                                return cashapp
                            }
                            else if (id===18) {
                                return paypal
                            }
                            else if (id===19) {
                                return link
                            }
                            else if (id===20) {
                                return soundcloud
                            }
                            else if (id===21) {
                                return applemusic
                            }
                            
                            else if (id===23) {
                                return calendly
                            }
                            else if (id===24) {
                                return website
                            }
                            else if (id===25) {
                                return custom
                            }
                            else if (id===26) {
                                return cashapp
                            }
                            else if (id===27) {
                                return applemusic
                            }
                                }