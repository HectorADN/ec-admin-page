import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router"

export const RegisterPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Bienvenid@</h1>
                <p className="text-balance text-muted-foreground">Registro</p>
              </div>

            {/* Nombre completo */}
              <div className="grid gap-2">
                <Label htmlFor="fullName">Nombre completo</Label>
                <Input 
                  id="fullName" 
                  type="text" 
                  placeholder="Nombre usuario"
                  required 
                />
              </div>
            
            {/* Alias */}
              <div className="grid gap-2">
                <Label htmlFor="alias">Alias <span className="text-xs">(Nombre corto)</span></Label>
                <Input 
                  id="alias" 
                  type="text" 
                  placeholder="Alias"
                  required
                />
              </div>
            
            {/* Rut */}
              <div className="grid gap-2">
                <Label htmlFor="rut">Rut</Label>
                <Input 
                  id="rut" 
                  type="text" 
                  placeholder="01000011-0"
                  required
                />
              </div>

            {/* Correo */}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="m@correo.com"
                  required 
                />
              </div>

            {/* Contraseña */}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Contraseña</Label>
                </div>
                <Input 
                  id="password" 
                  type="password"
                  placeholder="Contraseña"
                  required />
              </div>

            {/* Confirmar contraseña */}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="confirm_password">Confirmar contraseña</Label>
                </div>
                <Input 
                  id="confirm_password" 
                  type="password"
                  placeholder="Repite contraseña"
                  required />
              </div>

              <Button type="submit" className="w-full">
                Ingresar
              </Button>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground"></span>
              </div>
              
              <div className="text-center text-sm">
                ¿Ya tienes una cuenta? {"  "}
                <Link to="/login" className="underline underline-offset-4">
                  Ingresa aquí
                </Link>
              </div>
            </div>
          </form>

          {/* IMAGEN DE ADORNO */}
          <div className="relative hidden bg-muted md:block">
            <img
              src="/img/fondo-L16-01.jpg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>

        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        <Link to='https://www.ec-comercial.com'>www.ec-comercial.com</Link> | 2025
      </div>
    </div>
  )
}

