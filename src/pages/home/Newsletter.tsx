import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {};

  return (
    <div className="w-full flex flex-col items-center justify-center py-10 gap-5">
      <h2 className="text-[32px] font-bold mb-4">
        Stay Updated with PrepBank!
      </h2>
      <p className="text-gray-400 text-center">
        Subscribe to our newsletter for the latest updates, tips, and exclusive
        content to enhance your learning experience!
      </p>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          name="email"
          value={email || ""}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-xl border-2 py-4"
        />
        <Button
          type="submit"
          onClick={handleSubmit}
          className="bg-csdarkgreen hover:bg-csgreen rounded-full py-4"
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Newsletter;
