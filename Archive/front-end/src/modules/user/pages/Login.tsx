import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = ()=>{
    return (<Card className="w-full max-w-md mx-auto">
        <CardHeader>
            <CardTitle className="space-y-1 text-center">Login Here</CardTitle>
            <CardDescription className="text-center">Music App Login Form</CardDescription>
        </CardHeader>
        <CardContent>
           <form>
        <div className="grid w-full max-w-sm items-center gap-3">
             <Label htmlFor="email">Email</Label>
             <Input type="email" id="email" placeholder="Email" />
    </div>
     <div className="grid w-full max-w-sm items-center gap-3">
             <Label htmlFor="password">Password</Label>
             <Input type="password" id="password" placeholder="Password" />
    </div>
     
    <br />
    <div className="grid w-full max-w-sm items-center gap-3">
            <Button>Login</Button>
    </div>

           </form>
        </CardContent>
        
    </Card>);
}
export default Login;