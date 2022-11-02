"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4195],{1401:(e,t,a)=>{a.d(t,{IK:()=>x,oP:()=>D,I_:()=>j,sT:()=>o});var n=a(7294),i=a(6306);const o=e=>{let{stack:t}=e;return n.createElement(n.Fragment,null,t.map((e=>n.createElement(i.Z,{label:e,color:"secondary",style:{marginRight:5},key:e}))))},r="container_c17D",s="imgContainer_arMn",l="img_K7ni",c="content_A65C",d="titleContainer_h5La",m="title_EaXC",u="description_qJJf",h="linkContainer_NQ6x",g="paperContainer_owZE",f="title_UFdU",p="date_O8gS",v="authors__36R",b="publication_rgyV",y="url_uCqg";var w=a(2949),k=a(918),E=a(8454),C=a(9762),I=a(1927);const _=(0,E.ZP)(k.Z)((e=>{let{theme:t}=e;return{color:t.palette.text.secondary}})),N=(0,C.Z)({palette:{mode:"dark"}}),R=(0,C.Z)({palette:{mode:"light"}}),S=e=>{let{title:t,authors:a,publication:i,url:o,date:r}=e;const{isDarkTheme:s}=(0,w.I)(),l=s?N:R;return n.createElement(I.Z,{theme:l},n.createElement(_,{elevation:2,className:g},o&&n.createElement("a",{className:y,href:o,target:"_blank"},n.createElement("i",{className:"fa-solid fa-link"})),o?n.createElement("a",{className:f,href:o,target:"_blank"},t):n.createElement("span",{className:f},t),n.createElement("span",{className:p},r),n.createElement("span",{className:v},a),i&&n.createElement("span",{className:b},i)))},x=e=>{let{img:t,title:a,description:i,codeLink:g,liveLink:f,techstack:p,papers:v,tags:b}=e;const{isDarkTheme:y}=(0,w.I)();return n.createElement("section",{className:r},t&&n.createElement("div",{className:s},n.createElement("img",{src:t,className:l,alt:"dummy img"})),n.createElement("div",{className:c},n.createElement("div",{className:d},n.createElement("span",{className:m},a)),n.createElement("span",{className:u},i),v&&v.map((e=>n.createElement("div",{style:{margin:"1em auto"}},n.createElement(S,e)))),n.createElement("div",{className:h},g?n.createElement("a",{style:{marginRight:".7rem",marginLeft:"-.7rem",padding:".5rem .7rem"},href:g,target:"_blank"},"Code"):n.createElement(n.Fragment,null),f?n.createElement("a",{style:{marginRight:".7rem",marginLeft:"-.7rem",padding:".5rem .7rem"},href:f,target:"_blank"},"Live"):n.createElement(n.Fragment,null)),p&&n.createElement(o,{stack:p})))};var M=a(7462);const Z=[{img:"img/conflab.jpg",title:"The ConfLab Social Interaction Dataset",description:"A privacy-sensitive data collection concept and dataset for in-the-wild social interactions. We recorded free interaction of 48 subjects during a networking event at ACM Multimedia 2019. Our capture setup improves upon the data fidelity of prior in-the-wild datasets while retaining privacy sensitivity. We recorded videos from a non-invasive overhead view. Via chest-worn wearable sensors, we recorded body motion (9-axis IMU) low-frequency audio (1250 Hz), and Bluetooth-based proximity. Our benchmarks showcase some of the open research tasks related to in-the-wild privacy-preserving social data analysis: keypoints detection from overhead camera views, skeleton-based no-audio speaker detection, and F-formation detection. ",codeLink:"https://github.com/TUDelft-SPC-Lab/conflab",liveLink:"https://data.4tu.nl/collections/ConfLab_A_Rich_Multimodal_Multisensor_Dataset_of_Free-Standing_Social_Interactions_In-the-Wild/6034313",papers:[{title:"ConfLab: A Data Collection Concept, Dataset, and Benchmark for Machine Analysis of Free-Standing Social Interactions in the Wild",authors:"Chirag Raman*, Jose Vargas-Quiros*, Stephanie Tan*, Ekin Gedik, Ashraful Islam, and Hayley Hung",publication:"NeurIPS 2022 Datasets and Benchmarks Track",url:"https://doi.org/10.48550/arXiv.2205.05177",date:"2022"},{title:"Multimodal Data Collection for Social Interaction Analysis In-the-Wild",authors:"Hayley Hung, Chirag Raman, Ekin Gedik, Stephanie Tan and Jose Vargas",publication:"MM '19 - Proceedings of the 27th ACM International Conference on Multimedia",url:"https://dl-acm-org.tudelft.idm.oclc.org/doi/10.1145/3343031.3351320",date:"2019"}]},{title:"Differences in the annotation of laughter across modalities ",description:"Although laughter is well-recognized as a multimodal phenomenon, it is unclear how annotation of laughter differs when done from modalities like video, without access to audio. In this work we take a first step in this direction by asking if and how well laughter can be annotated when only audio, only video (containing full body movement information) or audiovisual modalities are available to annotators. We ask whether annotations of laughter are congruent across modalities, and compare the effect that labeling modality has on machine learning model performance. We compare annotations and models for laughter detection, intensity estimation, and segmentation, three tasks common in previous studies of laughter. Our analysis makes use of more than 4000 annotations acquired from 48 annotators, making use of the Covfee annotation framework.",papers:[{title:"Differences in annotation of laughter across modalities",authors:"Jose Vargas-Quiros, Laura Cabrera-Quiros, Catharine Oertel, and Hayley Hung",date:"2022"}]},{img:"img/covfee.jpg",title:"Covfee: an extensible web framework for continuous-time annotation of human behavior",description:"During my PhD, I developed a web-based, extensible framework for continuous annotation aimed at crowd-sourcing. Our experiments showed that continuous techniques (implemented in Covfee) can save human annotation time with no loss in annotation agreement.",codeLink:"https://github.com/josedvq/covfee",liveLink:"https://josedvq.github.io/covfee/",papers:[{title:"Covfee: an extensible web framework for continuous-time annotation of human behavior",authors:"Jose Vargas-Quiros, Stephanie Tan, Chirag Raman, Laura Cabrera-Quiros, and Hayley Hung",publication:"Understanding Social Behavior in Dyadic and Small Group Interactions, Proceedings of Machine Learning Research",url:"https://proceedings.mlr.press/v173/vargas-quiros22a.html",date:"2022"}]},{title:"Attraction and body movement in speed dates",description:"We present a study of attraction in the dyadic speed date setting. The study made use of accelerometer information (from chest-worn accelerometers) from 398 dyadic speed dates to analyze the relationship between body movement and self-reported affiliative goals related to attraction. Through machine learning experiments designed to capture individual and pairwise body movement information, we investigated the predictive power of body movement information towards attraction estimation. In particular, the pairwise features used in our study were designed to capture synchrony, mimicry and convergence information.",papers:[{title:"Individual and joint body movement assessed by wearable sensing as a predictor of attraction in speed dates",authors:"Jose Vargas-Quiros, Oyku Kacap, Hayley Hung, Laura Cabrera-Quiros",publication:"IEEE Transactions on Affective Computing",url:"https://ieeexplore.ieee.org/document/9662986",date:"2021"},{title:"Estimating Romantic, Social, and Sexual Attraction by Quantifying Bodily Coordination using Wearable Sensors",authors:"Oyku Kacap, Jose Vargas-Quiros, Hayley Hung",publication:"International Conference on Affective Computing and Intelligent Interaction Workshops and Demos (ACIIW)",url:"https://ieeexplore.ieee.org/document/8925137",date:"2019"}]},{title:"No-audio speaking status detection in crowded settings via visual pose-based filtering and wearable acceleration",description:"Recognizing who is speaking in a crowded scene is a key challenge towards the understanding of the social interactions going on within it. Unfortunately individual audio recordings are not available in many social interaction datasets due to subject privacy and logistic challenges. However, video and wearable sensors make it possible to recognize speaking in an unobtrusive, privacy-preserving way through body movement information. When considering the video modality, a bounding box is traditionally used in action recognition problems to localize the target subject whose action is to be assessed. However, cross-contamination, occlusion, and the articulated nature of the human body, make bounding boxes unsuitable in crowded scenes. We address this problem via a method making use of articulated body poses for subject localization and in the subsequent speech detection stage. We show that the selection of local features around pose keypoints has a positive effect on generalization performance while also significantly reducing the number of local features considered, making for a more efficient method. Using two in-the-wild datasets with different viewpoints of subjects, we investigate the role of cross-contamination in this effect. We additionally make use of acceleration measured through wearable sensors for the same task, and present a multimodal approach combining both methods.",papers:[{title:"No-audio speaking status detection in crowded settings via visual pose-based filtering and wearable acceleration",authors:"Jose Vargas-Quiros, Laura Cabrera-Quiros, Hayley Hung",url:"https://arxiv.org/abs/2211.00549",date:"2019"},{title:"Multimodal Data Collection for Social Interaction Analysis In-the-Wild",authors:"Hayley Hung, Chirag Raman, Ekin Gedik, Stephanie Tan and Jose Vargas",publication:"MM '19 - Proceedings of the 27th ACM International Conference on Multimedia",url:"https://dl-acm-org.tudelft.idm.oclc.org/doi/10.1145/3343031.3351320",date:"2019"}]},{title:"LaRed dataset: a mingling dataset with high-quality individual audio",description:"Recognizing voice activity from human speakers in a multimodal recording is a central task towards the understanding of the social interactions occurring within it. LaRed is an in-the-wild dataset for the study of voice activity from body movement. For ground truth, our dataset contains high-fidelity audio recordings from individual Lavalier microphones worn by subjects in the scene. The dataset also contains automatically-extracted pose tracks and chest-worn accelerometer readings, which provide an indication of overall body movement. We present three baselines for no-audio voice activity detection: a) voice activity detection from video, b) voice activity detection from body acceleration (chest-worn accelerometer), c) voice activity detection from our noisy pose tracks. The LaRed dataset provides the signals and ground truth necessary to evaluate a wide range of methods for voice activity detection from body movements.",papers:[{title:"LaRed Dataset: no-audio speaking status detection in a crowded-setting",authors:"Jose Vargas-Quiros, Hayley Hung, and Laura Cabrera-Quiros",date:"2022"}]},{title:"Information-theoretic anomaly detection and authorship attribution in literature (MSc thesis)",description:"KRIMP is an algorithm based on information theory capable of capturing arbitrary length co-occurrence relations between itemsets in a database. KRIMP code tables have shown to be useful models of databases for multiple machine learning tasks including classification and clustering. Cross-compression sizes obtained from KRIMP code tables are a generalization of cross-entropy capable of taking into account such co-occurrence relations. This work focuses on the application of KRIMP cross-compression in two different but overlapping areas. First, an unsupervised anomalous database detection algorithm is presented, capable of taking into account database structure. The algorithm is tested on itemset databases with a significant amount of structure to characterize its behavior and an experiment is performed on text data. Second, the application of KRIMP to natural language is investigated further, in the context of authorship attribution via classification. The KRIMP classifier is a generalization of the Naive Bayes classifier capable of combining frequently co-occurring words or items into itemsets, delivering an appealing comparison between the two algorithms. Different ways of transforming text into itemset form were explored, as well as two different ways of applying Laplace smoothing. Experiments indicated that co-occurrence relations are important for attribution, with KRIMP being more robust and in most cases more accurate on prose text when the complete alphabet is considered and itemsets are created per sentence. The behavior suggests that there is relevant syntactic structure at the sentence level involving punctuation and function words that is captured in KRIMP code tables, and is characteristic of individual authors.",papers:[{title:"Information-theoretic anomaly detection and authorship attribution in literature",authors:"Jose Vargas-Quiros",publication:"Universiteit Utrecht",url:"https://josedvq.github.io/msc_thesis.pdf",date:"2017"}]}],D=()=>n.createElement(n.Fragment,null,Z.map(((e,t)=>n.createElement(x,(0,M.Z)({key:t},e)))));var A=a(9722);const L=[{name:"linkedin",classname:"fab fa-linkedin fa-fw",link:"https://www.linkedin.com/in/josedvq/"},{name:"github",classname:"fab fa-github fa-fw",link:"https://github.com/josedvq"},{name:"instagram",classname:"fab fa-instagram fa-fw",link:"https://www.instagram.com/josedvq/"},{name:"mail",classname:"fa-solid fa-envelope",link:"mailto:josedvq@gmail.com"}],P=e=>{switch(e){case"linkedin":return"#0a66c2";case"github":return"purple";case"youtube":return"#c4302b";case"mail":return"brown";default:return"blue"}},j=()=>{const{isDarkTheme:e}=(0,w.I)();return n.createElement("div",null,L.map((t=>n.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",key:t.classname},n.createElement(A.Z,{className:t.classname,sx:{color:e?"white":"black",fontSize:30,marginTop:1,marginRight:1,"&:hover":{color:`${P(t.name)}`}}})))))}},854:(e,t,a)=>{a.r(t),a.d(t,{default:()=>M});var n=a(7294),i=a(6010),o=a(215),r=(a(9960),a(2263)),s=a(3366),l=a(7462),c=a(4780),d=a(8454),m=a(4135),u=a(8175),h=a(5893);const g=(0,u.Z)((0,h.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var f=a(7621);function p(e){return(0,f.Z)("MuiAvatar",e)}(0,a(1588).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const v=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],b=(0,d.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],a.colorDefault&&t.colorDefault]}})((({theme:e,ownerState:t})=>(0,l.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,l.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]})))),y=(0,d.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),w=(0,d.ZP)(g,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});const k=n.forwardRef((function(e,t){const a=(0,m.Z)({props:e,name:"MuiAvatar"}),{alt:o,children:r,className:d,component:u="div",imgProps:g,sizes:f,src:k,srcSet:E,variant:C="circular"}=a,I=(0,s.Z)(a,v);let _=null;const N=function({crossOrigin:e,referrerPolicy:t,src:a,srcSet:i}){const[o,r]=n.useState(!1);return n.useEffect((()=>{if(!a&&!i)return;r(!1);let n=!0;const o=new Image;return o.onload=()=>{n&&r("loaded")},o.onerror=()=>{n&&r("error")},o.crossOrigin=e,o.referrerPolicy=t,o.src=a,i&&(o.srcset=i),()=>{n=!1}}),[e,t,a,i]),o}((0,l.Z)({},g,{src:k,srcSet:E})),R=k||E,S=R&&"error"!==N,x=(0,l.Z)({},a,{colorDefault:!S,component:u,variant:C}),M=(e=>{const{classes:t,variant:a,colorDefault:n}=e,i={root:["root",a,n&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,c.Z)(i,p,t)})(x);return _=S?(0,h.jsx)(y,(0,l.Z)({alt:o,src:k,srcSet:E,sizes:f,ownerState:x,className:M.img},g)):null!=r?r:R&&o?o[0]:(0,h.jsx)(w,{className:M.fallback}),(0,h.jsx)(b,(0,l.Z)({as:u,ownerState:x,className:(0,i.Z)(M.root,d),ref:t},I,{children:_}))}));var E=a(4996);const C="heroBanner_qdFl",I="myContainer_aSRS",_="heroContainer_i2aB",N="heroAvatar_N7KE",R="homep_u7wW";var S=a(1401);function x(){const{siteConfig:e}=(0,r.Z)();return n.createElement("header",{className:(0,i.Z)("hero",C)},n.createElement("div",{className:"container"},n.createElement("div",{className:I},n.createElement(k,{alt:"Jose Vargas",className:N,src:(0,E.Z)("/img/me2.jpg"),sx:{width:150,height:150,m:2}}),n.createElement("div",{className:_},n.createElement("h1",{className:"hero__title"},e.title),n.createElement("p",{className:R},e.tagline),n.createElement(S.I_,null)))))}function M(){const{siteConfig:e}=(0,r.Z)();return n.createElement(o.Z,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />"},n.createElement(x,null),n.createElement("main",null,n.createElement("div",{className:"container"},n.createElement("div",{className:I,style:{paddingTop:"1.8em",paddingBottom:"1.8em"}},n.createElement("p",{className:R},"In my free time, I like to go around taking photos. If you find them interesting, feel free to follow me in Instagram \ud83d\ude00"),n.createElement("iframe",{src:"https://lightwidget.com/widgets/a3b4deb0856b5733b1db34153b5c37ca.html",scrolling:"no",allowtransparency:"true",class:"lightwidget-widget",style:{width:"100%",border:0,overflow:"hidden"}})))))}}}]);