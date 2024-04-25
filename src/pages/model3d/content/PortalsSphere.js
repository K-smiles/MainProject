
import { Html, Line } from '@react-three/drei'
import { Tooltip } from 'antd';
import './my.css'
import { Typography } from '@mui/material';
import { Image } from "antd";

import eye from "assets/images/3d/eye.png"
import teeth from "assets/images/3d/teeth.png"
import foot from "assets/images/3d/foot.png"
import skin from "assets/images/3d/skin.png"
import MKTypography from 'components/MKTypography';

function TextDisplay(props) {
    const data = props.des
    console.log(props.src)
    return <div>
        {data.map(item => {
            return <Typography variant='body1'>{item}</Typography>
        })}
        <Image
            width={150}
            src={props.src}
        />
    </div>
}

function Portals(props) {
    return (
        <group>
            <Line points={[props.begin, props.end]}
                color={props.color}
                lineWidth={3}
            />
            <mesh position={props.end} >
                <Html>
                    <Tooltip className="annotation" title={<TextDisplay des={props.des} src={props.src} />}>
                        <Typography variant='body1'>{props.type}</Typography>
                    </Tooltip>
                </Html>
            </mesh>
        </group>
    )
}

export default function SceneLabel() {
    const data = [{
        type: 'Eyes',
        begin: [5, 80, 25],
        end: [10, 85, 35],
        color:'black',
        des: ["Early stage: blood accumulation in the eyes, red eyes, and frequent tears", "Late stage: cataracts, loss of visual field, severe vision loss"],
        src: eye
    },
    {
        type: 'Foot',
        begin: [-10, -80, 1],
        end: [30, -50, 50],
        color:'yellow',
        des: ["Early stage: blisters, ulcers, yellow plaques", "Mid stage: osteomyelitis, ligament damage", "Late stage: tissue necrosis, amputation"],
        src: foot
    },
    {
        type: 'Oral cavity',
        begin: [-5, 70, 25],
        end: [-50, 70, 0],
        color:'blue',
        des: ["Early stage: swollen and bleeding gums and recurrent oral ulcers", "Advanced stage: periodontitis, dental caries, loosening and loss of teeth"],
        src: teeth
    },
    {
        type: 'Skin',
        begin: [0, 0, 0],
        end: [30, 30, 30],
        color:'red',
        des: ["Early stage: dry skin, increased dandruff, eczema", "Late stage: skin itching all over the body, skin blackening, erythema, fungal infection"],
        src: skin
    },
    ]
    return (<>
        {
            data.map(item => {
                return <Portals type={item.type}
                    begin={item.begin} end={item.end}
                    color={item.color}
                    des={item.des} src={item.src} />
            })
        }
    </>)
}


