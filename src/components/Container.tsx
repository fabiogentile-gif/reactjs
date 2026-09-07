import type { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
}

function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto w-[min(1120px,calc(100%-28px))] py-10 sm:w-[min(1120px,calc(100%-40px))] sm:py-16 sm:pb-20">
      {children}
    </div>
  )
}

export default Container