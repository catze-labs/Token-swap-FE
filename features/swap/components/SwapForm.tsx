import Button from "@/components/Button";
import Select from "@/components/Select";
import TextInput from "@/components/TextInput";
import React, { useEffect, useState } from "react";

interface SwapFormProps {
  onSubmit: (formData: { from: number; to: number }) => void;
}

const SWAP_RATE = 1 / 0.1;

const SwapForm: React.FC<SwapFormProps> = ({ onSubmit }) => {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * only number and dot allowed
   */
  const handleBeforeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // only allow numbers and dot
    const value = e.currentTarget.value;
    if (value.match(/^[0-9.]*$/)) {
      e.currentTarget.value = value;
    } else {
      e.preventDefault();
    }
  };

  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setFrom(Number(value));
  };

  const delayedSetTo = (value: number) => {
    setLoading(true);
    setTimeout(() => {
      setTo(value);
      setLoading(false);
    }, 300);
  };

  useEffect(() => {
    // 뒤의 무의미한 식은 자바스크립트 부동소수점 계산 오차를 방지하기 위함
    delayedSetTo((from * SWAP_RATE * 100000) / 100000);
  }, [from]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ from, to });
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="py-4">
        <div className="flex gap-2 items-end">
          <div className="w-2/3">
            <TextInput
              label="From"
              onBeforeInput={handleBeforeChange}
              onChange={handleFromChange}
            />
          </div>
          <div className="w-1/3">
            <Select options={[{ label: "GETH", value: "GoerliETH" }]} />{" "}
          </div>
        </div>

        <div className="flex gap-2 items-end">
          <div className="w-2/3">
            <TextInput label="To" value={to} loading={loading} />
          </div>
          <div className="w-1/3">
            <Select options={[{ label: "USDT", value: "USDT" }]} />{" "}
          </div>
        </div>
      </div>
      <Button className="w-full">Swap</Button>
    </form>
  );
};

export default SwapForm;
