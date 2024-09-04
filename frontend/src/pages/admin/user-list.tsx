// export const UserList = () => {
//   return <main className="w-full h-full overflow-y-auto">

//   </main>;
// };
import { cn } from "@/lib/utils";
import {
  getAlluserAction,
  updateUserStatusAction,
} from "@/redux/actions/user.action";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Button, Card, Typography } from "@material-tailwind/react";
import { format } from "date-fns";
import { useEffect } from "react";

const TABLE_HEAD = ["Username", "Phone number", "Joined date", "Actions"];

export function UserList() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAlluserAction());
  }, [dispatch]);
  const { users } = useAppSelector((state) => state.user);
  return (
    <Card
      className="h-full w-full overflow-scroll"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <table className="w-full min-w-max table-auto text-left scrollbar-none">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50/55 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users?.map(
            ({ username, phoneNumber, status, createdAt, _id }, index) => {
              const isLast = index === users?.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={String(_id)}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {username}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {phoneNumber}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {format(createdAt as unknown as string, "PPP")}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      as="a"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      <div className="w-full h-full  flex gap-2">
                        <Button
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                          className={cn("p-2 text-[11px]", {
                            "bg-red-400": !status,
                            "bg-green-400": status,
                          })}
                          onClick={(e) => {
                            e.stopPropagation()
                            dispatch(
                              updateUserStatusAction({
                                userId: String(_id),
                                status: status ? false : true,
                              })
                            );
                          }}
                        >
                          {status ? "Block" : "Unblock"}
                        </Button>
                      </div>
                    </Typography>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </Card>
  );
}
