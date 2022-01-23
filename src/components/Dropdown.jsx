import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import {addTokenSuccess} from "./redux/actions"

export const Dropdown = () => {
    const dispatch = useDispatch();
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
    return (
      
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-full shadow-sm px-4 py-2 bg-black text-sm font-medium text-white hover:bg-gray-700 focus:outline-none">
                  Dheeraj Mehta
                  <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
              </div>
        
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-700 text-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-900 text-white' : 'text-white',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Account
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-900 text-white' : 'text-white',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Profile
                        </a>
                      )}
                    </Menu.Item>
                    
                      <Menu.Item>
                {({ active }) => (
                  
                    <Link to={`/welcome`}><button
                            type="submit"
                            className={classNames(
                              active ? 'bg-gray-900 text-white' : 'text-white',
                              'block w-full text-left px-4 py-2 text-sm'
                            )}
                            onClick={() =>dispatch(addTokenSuccess(""))}
                          >
                            Log out
                          </button></Link>
                        )}
                      </Menu.Item>
                   
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
    );
}