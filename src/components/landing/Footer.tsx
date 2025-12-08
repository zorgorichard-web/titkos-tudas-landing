const Footer = () => {
  return <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="font-display text-lg font-semibold text-foreground mb-1">
                ELME KÓDEX 
              </p>
              <p className="text-muted-foreground text-sm">
                Pszichológiai önvédelem mindenkinek
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-gold transition-colors">
                Adatvédelem
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                ÁSZF
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                Kapcsolat
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} TITKOS TUDÁS. Minden jog fenntartva.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;