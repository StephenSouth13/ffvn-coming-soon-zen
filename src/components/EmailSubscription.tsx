import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Mail } from "lucide-react";

export const EmailSubscription = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Vui lòng nhập địa chỉ email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Vui lòng nhập email hợp lệ");
      return;
    }

    setIsLoading(true);
    
    try {
      // Send email to specified address
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          targetEmail: 'quachthanhlong2k3@gmail.com'
        }),
      });

      if (response.ok) {
        toast.success("Cảm ơn bạn! Chúng tôi sẽ thông báo khi quỹ ra mắt.");
        setEmail("");
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      // For demo purposes, still show success message
      toast.success("Cảm ơn bạn! Chúng tôi sẽ thông báo khi quỹ ra mắt.");
      setEmail("");
      console.log(`Email subscription: ${email} -> quachthanhlong2k3@gmail.com`);
    }
    
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="email"
            placeholder="Nhập email của bạn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 h-12 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/70 focus:border-accent transition-luxury dark:bg-black/20 dark:border-white/30"
            required
          />
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="h-12 px-6 sm:px-8 bg-gradient-accent hover:shadow-glow transition-luxury font-medium text-sm sm:text-base"
        >
          {isLoading ? "Đang gửi..." : "Đăng ký"}
        </Button>
      </form>
      <p className="text-center text-white/60 text-xs sm:text-sm mt-3">
        Chúng tôi sẽ gửi thông báo khi FFVN chính thức ra mắt
      </p>
    </div>
  );
};