import { getPropertyWithId } from "@/redux/actions/propertyAction";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  ListStartIcon,
  Mail,
  MapPin,
  Mic,
  Phone,
  PrinterCheck,
  User,
} from "lucide-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const PropertyDetail = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scroll({ top: 0, behavior: "smooth" });
    }, 0);
  }, []);
  const dispatch = useAppDispatch();
  const { propertyId } = useParams();
  useEffect(() => {
    dispatch(getPropertyWithId(String(propertyId)));
  }, [dispatch, propertyId]);
  const { property } = useAppSelector((state) => state.property);
  return (
    <main className="w-full h-screen">
      <section className="wrapper px-2 py-5">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full flex flex-col gap-3 justify-between">
            <div className="flex flex-col gap-2">
              <div className="w-full">
                <h1 className="font-bold text-3xl">{property?.title}</h1>
              </div>
              <div>
                <p className="font-medium leading-9">{property?.description}</p>
              </div>
            </div>
            <div className="w-full items-center justify-between text-colors-forground flex gap-4 mt-2">
              <h2 className="text-2xl font-bold text-colors-forground">
                ₹{property?.price}
              </h2>
              <div className="flex gap-2 font-bold">
                <PrinterCheck className="w-5" />
                <span className="capitalize">{property?.listingType}</span>
              </div>
              <div className="flex gap-2 font-bold">
                <ListStartIcon className="w-5" />
                <span className="capitalize">{property?.propertyType}</span>
              </div>
            </div>
            <div className="flex">
              <div className="h-12 rounded-lg border flex items-center">
                <div className="h-full border-r flex-center px-3">
                  <MapPin className="w-5" />
                </div>
                <div className="w-full px-3">
                  <h4>
                    {property?.address?.city},{property?.address?.state},
                    {property?.address?.country}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-lg py-3 px-5 border ">
            <div className="w-full">
              <h1 className="font-semibold text-lg">Contact Information</h1>
            </div>
            <div className="w-full mt-3 flex flex-col gap-2">
              <div className="h-12 rounded-lg border flex items-center">
                <div className="h-full border-r flex-center px-3">
                  <User className="w-5" />
                </div>
                <div className="w-full px-3">
                  <h4 className="capitalize">{property?.user?.username}</h4>
                </div>
              </div>
              <div className="h-12 rounded-lg border flex items-center">
                <div className="h-full border-r flex-center px-3">
                  <Phone className="w-5" />
                </div>
                <div className="w-full px-3 flex justify-between  items-center">
                  <h4>{property?.user?.phoneNumber}</h4>
                  <a href="tel:919446100107">
                    <Mic className="w-5 cursor-pointer text-colors-forground" />
                  </a>
                </div>
              </div>
              {property?.user && property?.user?.email && (
                <>
                  <div className="h-12 rounded-lg border flex items-center">
                    <div className="h-full border-r flex-center px-3">
                      <Mail className="w-5" />
                    </div>
                    <div className="w-full px-3">
                      <h4>{property?.user?.email}</h4>
                    </div>
                  </div>
                </>
              )}
              <div className="h-12 rounded-lg border flex items-center">
                <div className="h-full border-r flex-center px-3">
                  <MapPin className="w-5" />
                </div>
                <div className="w-full px-3">
                  <h4>
                    {property?.address?.city},{property?.address?.state},
                    {property?.address?.country}
                  </h4>
                </div>
              </div>
              <div className="h-12 rounded-lg border flex items-center">
                <div className="h-full border-r flex-center px-3">
                  <MapPin className="w-5" />
                </div>
                <div className="w-full px-3">
                  <h4>{property?.address?.zipcode}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {(property?.images as unknown as string[])?.map((img, Id) => (
            <div
              key={String(img + "" + Id)}
              className="w-full h-64 border shadow-md overflow-hidden rounded-sm"
            >
              <img src={img} className="w-full h-full object-cover" alt="" />
            </div>
          ))}
        </div>
        <div className="w-full mt-5 rounded-md   grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="w-full border rounded-md flex flex-col gap-2 p-5">
            {property?.featuresAndAminity?.map((am, Id) => (
              <div
                key={String(am + Id)}
                className="w-full p-2 text-sm bg-slate-100 shadow-md border relative rounded-md text-wrap break-words pr-5"
              >
                {am}
              </div>
            ))}
          </div>
          <div className="w-full border rounded-md flex flex-col gap-2 p-5">
            {property?.otherProperty?.map((am, Id) => (
              <div
                key={String(am + Id)}
                className="w-full p-2 text-sm bg-slate-100 shadow-md border relative rounded-md text-wrap break-words pr-5"
              >
                {am}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
