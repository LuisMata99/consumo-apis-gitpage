import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Hero from '../Hero/hero'
import DollarWidget from '../stats/DollarWidget'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'data:image/png;base64,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',
}
const navigation = [
  {name: 'Dashboard', href: '#', current: true},
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-900">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-violet-800/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0">
                  <img
                    alt="Your Company"
                    src="data:image/jpeg;base64,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"
                    className="size-8 rounded-full"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current
                            ? 'bg-gray-950/50 text-white'
                            : 'text-gray-300 hover:bg-white/5 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="size-6" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <MenuButton className="relative flex max-w-xs items-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src={user.imageUrl}
                        className="size-8 rounded-full outline outline-1 -outline-offset-1 outline-white/10"
                      />
                    </MenuButton>

                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 outline outline-1 -outline-offset-1 outline-white/10 transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          <a
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-300 data-[focus]:bg-white/5 data-[focus]:outline-none"
                          >
                            {item.name}
                          </a>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-950/50 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
            <div className="border-t border-white/10 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="shrink-0">
                  <img
                    alt=""
                    src={user.imageUrl}
                    className="size-10 rounded-full outline outline-1 -outline-offset-1 outline-white/10"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base/5 font-medium text-white">{user.name}</div>
                  <div className="text-sm font-medium text-gray-400">{user.email}</div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto shrink-0 rounded-full p-1 text-gray-400 hover:text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white"
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>
        <main className="w-screen h-screen">
          <div className="w-full h-full">
            <Hero />
             <div className="mt-8 mb-8">
              <DollarWidget />
             </div>
          </div>
        </main>
      </div>
    </>
  )
}
