program read_html
    implicit none
    character(len=256) :: line
    integer :: unit, ios

    unit = 10
    open(unit=unit, file="mailForm.html", status="old", action="read", iostat=ios)
    if (ios /= 0) then
        print *, "Error opening file."
        stop
    end if

    print *, "HTML Content:"
    do
        read(unit, '(A)', iostat=ios) line
        if (ios /= 0) exit
        print *, trim(line)
    end do

    close(unit)
end program read_html
