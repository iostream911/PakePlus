window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)}); {                                                                                                                     
    "url": "https://mczc.szmcjt.com:9443",
    "name": "会记",                                                                                                     
    "icon": "./icon.png",                                                                                               
    "width": 1200,                                                                                                      
    "height": 800,                                                                                                      
    "fullscreen": false,                                                                                                
    "resizable": true,                                                                                                  
    "identifier": "com.huiji.app",                                                                                      
    "userAgent": "Mozilla/5.0 Huiji/1.0",                                                                               
    "inject": [                                                                                                         
      "navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia || (c =>                               
  navigator.mediaDevices.getUserMedia(c))"                                                                              
    ],                                                                                                                  
    "linux": {                                                                                                          
      "features": ["audio"]                                                                                             
    },                                                                                                                  
    "mac": {                                                                                                            
      "entitlements": {                                                                                                 
        "com.apple.security.device.audio-input": true,                                                                  
        "com.apple.security.device.microphone": true                                                                    
      }                                                                                                                 
    },                                                                                                                  
    "windows": {                                                                                                        
      "features": ["audio"]                                                                                             
    }                                                                                                                   
  }          