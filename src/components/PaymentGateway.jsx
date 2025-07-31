import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Shield, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PaymentGatewayProps {
  amount: number;
  onPaymentSuccess: () => void;
}

const PaymentGateway = ({ amount, onPaymentSuccess }: PaymentGatewayProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handlePayment = async () => {
    setIsProcessing(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Payment Successful!",
        description: `Payment of ₹${amount} processed successfully. Your order is confirmed.`,
      });
      
      onPaymentSuccess();
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "There was an issue processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CreditCard className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-xl">Secure Payment</CardTitle>
        <CardDescription>
          Complete your order with secure online payment
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-secondary/30 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <span className="font-medium">Total Amount:</span>
            <span className="text-2xl font-bold text-primary">₹{amount}</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4 text-green-600" />
            <span>256-bit SSL encrypted payment</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>PCI DSS compliant secure gateway</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>Accepted: Visa, Mastercard, RuPay, UPI</span>
          </div>
        </div>

        <Button 
          onClick={handlePayment} 
          className="w-full group" 
          disabled={isProcessing}
          size="lg"
        >
          {isProcessing ? (
            "Processing Payment..."
          ) : (
            <>
              Pay ₹{amount} Securely
              <CreditCard className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Your payment information is secure and encrypted. We don't store your card details.
        </p>
      </CardContent>
    </Card>
  );
};

export default PaymentGateway;