import { Mail, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative border-t border-alabaster/10 bg-burgundy-950 px-6 pt-24 pb-12 md:px-12">
      <div className="mx-auto max-w-7xl">
        
        {/* Core Layout: Centered Contact Details for V Sanjana's Studio */}
        <div className="mx-auto max-w-2xl border border-alabaster/10 bg-burgundy-900/20 p-8 md:p-12 rounded-sm shadow-xl backdrop-blur-sm">
          
          <div className="space-y-8">
            {/* Direct Channels */}
            <div className="text-center md:text-left">
              <span className="font-mono text-[8px] tracking-[0.3em] text-rose-muted uppercase">
                DIRECT CONTACT & CHANNELS
              </span>
              <h4 className="mt-2 font-serif text-2xl text-alabaster uppercase tracking-wide">V Sanjana's Studio</h4>
              <p className="mt-2 font-sans text-xs font-light leading-relaxed text-rose-cream/70">
                For speaking engagements, direct inquiries, or reading group invitations.
              </p>
              
              <div className="mt-6 flex flex-col md:flex-row gap-6 md:gap-10 justify-center md:justify-start pt-6 border-t border-alabaster/5">
                <a 
                  href="mailto:Vunnamsanjana75@gmail.com" 
                  className="flex items-center justify-center md:justify-start space-x-3 text-xs text-rose-cream hover:text-alabaster transition-all cursor-none group"
                  data-cursor="MAIL"
                >
                  <Mail size={13} className="text-rose-muted group-hover:text-alabaster transition-colors" />
                  <span className="font-light tracking-wide">Vunnamsanjana75@gmail.com</span>
                </a>
                <a 
                  href="https://www.instagram.com/author.v.sanjana?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start space-x-3 text-xs text-rose-cream hover:text-alabaster transition-all cursor-none group"
                  data-cursor="INSTAGRAM"
                >
                  <Instagram size={13} className="text-rose-muted group-hover:text-alabaster transition-colors" />
                  <span className="font-light tracking-wide">@author.v.sanjana</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic bottom branding rail */}
        <div className="mt-24 border-t border-alabaster/10 pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-wider text-alabaster font-semibold">V SANJANA</span>
            <span className="font-mono text-[8px] tracking-[0.25em] text-rose-muted uppercase mt-1">THE GEOMETRIES OF SILENCE</span>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-[9px] tracking-widest text-rose-cream/50">
            <a 
              href="mailto:Vunnamsanjana75@gmail.com" 
              className="hover:text-alabaster transition-colors cursor-none"
              data-cursor="MAIL"
            >
              EMAIL
            </a>
            <a 
              href="https://www.instagram.com/author.v.sanjana?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-alabaster transition-colors cursor-none"
              data-cursor="OPEN"
            >
              INSTAGRAM
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 text-right justify-end">
            <div className="font-mono text-[8px] tracking-[0.15em] text-rose-muted uppercase">
              © {currentYear} V SANJANA PORTFOLIO • WEBSITE BY CREATIVE LABS
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
