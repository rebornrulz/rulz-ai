FROM scratch
ADD alpine-minirootfs-3.16.2-aarch64.tar.gz /
CMD ["/bin/sh"]