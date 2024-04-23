
import { Html, Line } from '@react-three/drei'
import { Popconfirm } from 'antd'
import './my.css'

export default function Portals(props) {
    return (
        <group>
            <Line points={[props.begin, props.end]}
                color="yellow"
                lineWidth={1}
            />
            <mesh position={props.end} >
                <Html
 
                >
                    <Popconfirm className="annotation" title="Information" onConfirm={props.onClick} okText="Yes" cancelText="No">
                        <button >{props.name}</button>
                    </Popconfirm>
                </Html>


            </mesh>
        </group>
    )
}