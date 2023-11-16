interface IOffice {
  sTitle: string;
  sTimeline: string;
  oCompany: {
    sLogo: string;
    sName: string;
    sLink: string;
    sCity: string;
  };
}

const Office = ({ oOffice }: { oOffice: IOffice }) => {
  const { sTitle, oCompany, sTimeline } = oOffice;

  return (
    <div className="border p-4 rounded-xl box-equal gap-x-6">
      {/* img */}
      <img
        src={`/img/experiences/${oCompany.sLogo}`}
        alt={oCompany.sName}
        width={50}
      />

      {/* texts */}
      <div className="flex-1">
        <p className="font-bold">{sTitle}</p>

        <div className="box-equal gap-x-2 text-gray-600 text-sm mb-2">
          <a
            href={oCompany.sLink}
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {oCompany.sName}
          </a>

          <p>&middot;</p>

          <p>{oCompany.sCity}</p>
        </div>

        <p className="text-sm">{sTimeline}</p>
      </div>
    </div>
  );
};

export default Office;
