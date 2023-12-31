import { AnimatePresence, motion } from "framer-motion"
import { useSnapshot } from "valtio"
import state from "../store"
import { slideAnimation } from "../config/motion"
import { EditorTabs } from "../config/constants"
import { Tab } from "../components"

const Customizer = () => {
  const snap = useSnapshot(state)

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key={"custom"}
            className="absolute top-0 left-0 z-10"
            {...slideAnimation('left')}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
              {EditorTabs.map((tab) => (
                <Tab
                  key={tab.name}
                  tab={tab}
                  handleClick={() => {}}
                />
              ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer
