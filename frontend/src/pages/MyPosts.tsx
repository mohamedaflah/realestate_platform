import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAppSelector } from "@/redux/store";
import { Edit2, Trash2 } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const MyPosts = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);
  useEffect(() => {
    if (!user?._id) {
      navigate("/");
    }
  }, [navigate, user?._id]);
  return (
    <main className="w-full h-screen">
      <section className="wrapper px-3 py-5">
        <div className="w-full">
          <h1 className="font-semibold text-2xl">My properties</h1>
        </div>
        <div className="mt-5 w-full">
          <Table className="">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[170px]">Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead className="text-right">Added at</TableHead>
                <TableHead className="text-right">Last updated</TableHead>
                <TableHead className="text-right">Sell type</TableHead>
                <TableHead className="text-right">Property type</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                <TableCell className="text-right">
                  <div className="w-full h-full flex justify-end gap-2 ">
                    <Button className="px-2  py-1 bg-blue-500">
                      <Edit2 className="w-4" />
                    </Button>
                    <Button className="px-2  py-1 bg-red-500">
                      <Trash2 className="w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </main>
  );
};
