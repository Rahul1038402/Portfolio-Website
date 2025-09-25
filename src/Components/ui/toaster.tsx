import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  ToastAction,
} from "@/Components/ui/toast";
import { AnimatePresence, motion } from "framer-motion";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      <AnimatePresence mode="popLayout">
        {toasts.map(({ id, title, description, action, ...props }) => (
          <Toast key={id} {...props}>
            <div className="flex items-start space-x-3 w-full">
              {/* Animated icon indicator based on variant */}
              <motion.div 
                className="flex-shrink-0 mt-0.5"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 400 }}
              >
                {props.variant === 'destructive' && (
                  <motion.div 
                    className="w-2 h-2 bg-destructive rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7] 
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                )}
                {props.variant === 'success' && (
                  <motion.div 
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7] 
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                )}
                {(!props.variant || props.variant === 'default') && (
                  <motion.div 
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7] 
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                )}
              </motion.div>
              
              {/* Content with staggered animation */}
              <motion.div 
                className="flex-1 min-w-0 space-y-1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
              >
                {title && (
                  <ToastTitle className="text-left font-medium leading-tight">
                    {title}
                  </ToastTitle>
                )}
                {description && (
                  <ToastDescription className="text-left text-sm leading-relaxed">
                    {description}
                  </ToastDescription>
                )}
              </motion.div>
              
              {/* Action button with hover animation */}
              {action && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ToastAction 
                    altText="Toast action" 
                    className="ml-auto flex-shrink-0"
                  >
                    {action}
                  </ToastAction>
                </motion.div>
              )}
            </div>
            
            {/* Close button */}
            <ToastClose />
          </Toast>
        ))}
      </AnimatePresence>
      <ToastViewport />
    </ToastProvider>
  );
}