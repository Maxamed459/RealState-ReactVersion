import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="bg-[#3955E5] text-white w-full">
        <div className="max-w-6xl py-6 mx-auto flex flex-col md:flex-row justify-between items-center space-y-4">
            <div className="flex flex-col items-center md:items-start gap-2">
                <a href="#" id="brand" className="flex items-center md:items-start gap-2">
                    <img src="/footer-logo-02.png" className="h-10 w-auto" alt="logo" />
                </a>
                <p className="text-sm text-center md:text-left">Your trusted partner in finding the perfect property.</p>
            </div>
            <div className="flex gap-4">
                <a href="#" className="hover:text-[#222123]"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="hover:text-[#222123]"><i className="fab fa-twitter"></i></a>
                <a href="#" className="hover:text-[#222123]"><i className="fab fa-instagram"></i></a>
                <a href="#" className="hover:text-[#222123]"><i className="fab fa-linkedin-in"></i></a>
            </div>
        </div>
        <div className="w-full bg-[#2f46bb] opacity-90 text-center py-3">
            <p className="text-sm">&copy; 2025 Real State. All rights reserved.</p>
        </div>
    </footer>
    </>
  )
}

export default Footer