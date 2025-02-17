
import {motion} from "framer-motion"

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-100 to-green-100 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: ["linear-gradient(to right, #e0f2fe, #dcfce7)", "linear-gradient(to right, #dcfce7, #e0f2fe)"],
        }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      />
      <motion.div
        className="mb-8 text-4xl font-bold text-blue-500"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        OLX
      </motion.div>
      <div className="flex space-x-3 mb-8">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-5 h-5 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              backgroundColor: ["#23e5db", "#3a77ff", "#23e5db"],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.2,
            }}
          />
        ))}
      </div>
      <motion.div
        className="text-lg text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        Loading amazing deals...
      </motion.div>
    </div>
  )
}

export default Loading