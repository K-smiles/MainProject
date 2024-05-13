import { createContext, useContext } from 'react'

export const DockContext = createContext({ width: 0, hovered: false, zoomLevel: 1, setIsZooming: () => { } })

export const useDock = () => {
  return useContext(DockContext)
}
