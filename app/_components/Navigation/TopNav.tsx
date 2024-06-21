import Image from 'next/image'

import { EllipsisVerticalIcon, PlusIcon } from '@heroicons/react/24/solid'
import DarkLogo from '@/public/logo/logo-dark.svg'
import LightLogo from '@/public/logo/logo-light.svg'

export default function TopNav() {
  return (
    <header className="flex justify-between items-center bg-dark-700 py-5 px-6">
      <div className="flex gap-16 items-center">
        <div className="">
          <Image src={LightLogo} alt="Kanban Logo" />
        </div>
        <h1 className="text-2xl">Projet Name</h1>
      </div>
      <div className="flex gap-4">
        <button className="bg-purple-500 flex items-center gap-2 px-5 py-3 rounded-full">
          <PlusIcon className="size-5" />
          Add New Task
        </button>
        <button>
          <EllipsisVerticalIcon className="text-light-300 size-6" />
        </button>
      </div>
    </header>
  )
}
