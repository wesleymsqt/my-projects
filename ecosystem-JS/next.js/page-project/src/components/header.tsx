import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-xl font-bold text-primary-foreground">L</span>
          </div>
          <span className="text-xl font-bold">MeuLogo</span>
        </Link>

        <nav className="flex items-center space-x-6">
          <Link 
            href="/sobre" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Sobre
          </Link>
          <Link 
            href="/servicos" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Serviços
          </Link>
          <Link 
            href="/portfolio" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Portfólio
          </Link>
          <Link 
            href="/contato" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}
